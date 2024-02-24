/* eslint react/prop-types: 0 */

import styled from 'styled-components'
import Section from '../../ui/Section'
import GoogleMapReact from 'google-map-react'

const MapContainer = styled.div`
  height: 50rem;
  width: 100%;
`

const AnyReactComponent = ({ text }) => <div>{text}</div>

function Location() {
  const defaultProps = {
    center: {
      lat: 5.5834998,
      lng: -0.1999431,
    },
    zoom: 10,
  }
  return (
    <Section type="location">
      <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDL4nGMfaGfecmIEMQGA-tZHQbba_aLfOU' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={5.5834998}
            lng={-0.1999431}
            text="My Marker"
          />
        </GoogleMapReact>
      </MapContainer>
    </Section>
  )
}

export default Location
