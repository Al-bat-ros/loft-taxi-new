import React from 'react';
import { render, screen } from '@testing-library/react'
import { Maps } from './Maps';





describe('Maps', () => {
    render(<Maps />);
    it("Loading the map when I go to the pages",  () => {
        
        const mapElement = screen.getByTestId("map")
        expect(mapElement).toBeInTheDocument();
        
    });
});
