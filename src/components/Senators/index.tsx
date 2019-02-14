import React from 'react'
import styled from 'styled-components'
import { Box } from '@smooth-ui/core-sc'


const SenatorBox = styled(Box)`
  display: flex;
  flex-direction: column;
  background: #e6e6e6;
  margin: 8px;
  padding: 16px;
  border: 1px solid #cdcdcd;
  max-width: 30%;

  a {
    color: red;
    text-decoration: none;
  }

  a:hover {
    /* text-decoration: underline; */
    color: darkred;
    cursor: pointer;
  }

`

const Name = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 700;
  margin-bottom: 8px;
`

const Biography = styled.blockquote`
  margin-bottom: 4px;
`


export default ({ senators }) => (
  <>
    {senators.map((senator, index) => (
      <SenatorBox
        key={index}
        display="flex"
      >
        <Name><a href={senator.website}>{senator.name}</a></Name>
        <div>Elected On: <time>{senator.entered_office}</time> </div>
        <p>Term Ends On: {senator.term_end}</p>
        <Biography>{senator.biography}</Biography>
        <address>
          <p>
            {senator.address_street} <br />
            {senator.address_city} {senator.address_state} {senator.address_zipcode}
          </p>

          <dl>
            <dt>Office</dt>
            <dd><a href={`tel:+${senator.phone}`}>{senator.phone}</a></dd>

            <dt>Fax</dt>
            <dd><a href={`tel:+${senator.fax}`}>{senator.fax}</a></dd>

            <dt>Email</dt>
            <dd>Go to the <a href={senator.contact_page} target="_blank">website</a>.</dd>
          </dl>
        </address>
      </SenatorBox>
    ))}
  </>
)
