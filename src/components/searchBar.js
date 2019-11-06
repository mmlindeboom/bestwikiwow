import React, { useState, useRef } from 'react'
import {
  HeaderNavigation,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from 'baseui/header-navigation';
import { Input } from 'baseui/input';
import {Search} from 'baseui/icon';

export default function({runQuery, setQuery }) {
  const formEl = useRef(null)

  // Uncomment me
  // const [searchInput, setSearchInput] = useState(null)

  const handleSubmit = () => {
    formEl.current.dispatchEvent(new Event('submit'))
  }

  return (
    <HeaderNavigation style={{background: '#7cad67'}}>
        <NavigationList>
          <NavigationItem><a href="JavaScript:Void(0) "><img width="250px" src="/wikiwow_logo.png"></img></a></NavigationItem>
          <NavigationItem>
            <form ref={formEl}
                onSubmit={(e) => {
                e.preventDefault()
                runQuery()
                //runQuery(searchInput)
              }}>
              <Input
                placeholder="...do everything!"
                onChange={(e) => setQuery(e.target.value)}
                endEnhancer={<Search size="20px" onClick={handleSubmit}/>}
                clearable />
            </form>

          </NavigationItem>
        </NavigationList>
      </HeaderNavigation>
  )
}