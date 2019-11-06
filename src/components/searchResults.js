import React from 'react'
import {
  Card,
  StyledBody,
} from "baseui/card";

export default function({ loading, steps, images, query}) {
  return (
    <div>
      {!loading && steps && <Card
      title={`How to ${query || 'do anything..'}.`}
      style={{width: 670, margin: '30px 0'}}>

      </Card>}
      {!loading && steps && images && Object.values(steps).map((step, i) => (
        <Card title={i+1} headerImage={images[i+1]} style={{width: 670, marginBottom: 18}}>
          <StyledBody>{step}</StyledBody>
        </Card>
    ))}
    </div>

  )
}