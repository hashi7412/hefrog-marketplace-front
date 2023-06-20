import React, { Component } from 'react';
import styled from 'styled-components';

/**
 * The options array should contain objects.
 * Required keys are "name" and "value" but you can have and use any number of key/value pairs.
 */



export default function SelectWithInput() {

  const options = [
    {name: 'Swedish', value: 'sv'},
    {name: 'English', value: 'en'},
    {
        type: 'group',
        name: 'Group name',
        items: [
            {name: 'Spanish', value: 'es'},
        ]
    },
];

/* Simple example */

  return (
    <></>
  );
}

