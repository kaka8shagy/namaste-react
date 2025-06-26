import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Contact from '../Contact';

describe('Contact Component', () => {
    beforeEach(() => {
        render(<Contact />);
    });

    it('should load Contact component', () => {
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe('Contact Us');
    });

    it('should load 3 inputs', () => {
        const inputBoxes = screen.getAllByRole('textbox');
        expect(inputBoxes).toHaveLength(3);
        expect(inputBoxes.length).toBe(3);
        expect(inputBoxes.length).toEqual(3);
    });
});