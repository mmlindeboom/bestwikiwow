import React, { useEffect, useState, useRef } from 'react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, styled} from 'baseui';
import { useStyletron } from 'baseui'
import {ListItem, ListItemLabel} from 'baseui/list';
import { H5 } from 'baseui/typography'
import { Input } from 'baseui/input';
import { Button } from 'baseui/button'
import {
  Card,
  StyledBody,
  StyledAction
} from "baseui/card";
import {Search} from 'baseui/icon';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from 'baseui/header-navigation';
const engine = new Styletron();

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: "1200px",
  margin: "0 auto"
});

const VideoBg = function({src}) {
  const [useCSS] = useStyletron()

  return (
    <div className={useCSS({
      'background-image': "url(https://dzwonsemrish7.cloudfront.net/items/1C1s310E3T013E0k2j3w/Screen%20Recording%202019-11-04%20at%2005.42%20PM.gif)",
      'background-size': 'cover',
      position: 'fixed',
      top: '64px',
      right: 0,
      bottom: 0,
      left: 0,
      overflow: 'hidden',
      'z-index': -100})}>
    </div>
  )
}



function App() {
  const [css, theme] = useStyletron()
  const inputEl = useRef(null)
  const [steps, setSteps] = useState(null)
  const [images, setImages] = useState(null)
  const [question, setQuestion] = useState(null)
  const [submitEnabled, enableSubmit] = useState(false)

  const getSteps = async function(e) {
    const textRes = await fetch('https://hargrimm-wikihow-v1.p.rapidapi.com/steps', {
      headers: {
        "x-rapidapi-host": "hargrimm-wikihow-v1.p.rapidapi.com",
	      "x-rapidapi-key": "62e357d16fmshc6d64918f6f7ea1p131f42jsn290ce40de963"
      }
    })
    const imageRes = await fetch('https://hargrimm-wikihow-v1.p.rapidapi.com/images', {
      headers: {
        "x-rapidapi-host": "hargrimm-wikihow-v1.p.rapidapi.com",
	      "x-rapidapi-key": "62e357d16fmshc6d64918f6f7ea1p131f42jsn290ce40de963"
      }
    })

    const textData = await textRes.json()
    const imageData = await imageRes.json()
    setSteps(textData)
    setImages(imageData)
  }

  useEffect(() => {
    if (question && question.length) {
      enableSubmit(true)
    } else {
      enableSubmit(false)
    }
  }, [question])


  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
      <HeaderNavigation style={{background: '#93b874'}}>
        <NavigationList>
          <NavigationItem><img width="162px" height="42px" src="https://www.wikihow.com/skins/owl/images/wikihow_logo.png"></img></NavigationItem>
          <NavigationItem>
            <form onSubmit={(e) => {
              e.preventDefault()
              getSteps()
            }}>
              <Input
                placeholder="to do anything..."
                ref={inputEl}
                onChange={(e) => setQuestion(e.target.value)}
                endEnhancer={<Search size="18px" />}
                clearable />
            </form>

          </NavigationItem>
        </NavigationList>
      </HeaderNavigation>
      <Centered>
        <div>
          {!steps && <VideoBg src="https://dzwonsemrish7.cloudfront.net/items/2J3f0C2N2N2v001e3a2x/Screen%20Recording%202019-11-04%20at%2005.23%20PM.mov" />}


          {steps &&<Card
            title={`How to ${question || 'do anything..'}.`}
            style={{width: 670, margin: '30px 0'}}>

          </Card>}
          {steps && images && Object.values(steps).map((step, i) => (
            <Card title={i+1} headerImage={images[i+1]} style={{width: 670, marginBottom: 18}}>
              <StyledBody>{step}</StyledBody>
            </Card>
          ))}
        </div>

        </Centered>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
