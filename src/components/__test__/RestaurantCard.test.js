import RestaurantCard from '../RestaurantCard';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('RestaurantCard Component', () => {
    const restaurant = {
        name: 'Test Restaurant',
        cloudinaryImageId: 'test-image-id',
        avgRating: '4.5',
        cuisines: ['Italian', 'Pizza'],
        costForTwo: '₹500',
        sla: {
            slaString: '30 mins',
        },
    };

    it('should render RestaurantCard with correct details', () => {
        render(<RestaurantCard restaurant={restaurant} />);
        
        const nameElement = screen.getByText('Test Restaurant');
        expect(nameElement).toBeInTheDocument();

        const imageElement = screen.getByAltText('Test Restaurant');
        expect(imageElement).toBeInTheDocument();
        expect(imageElement.getAttribute('src')).toContain('test-image-id');

        const ratingElement = screen.getByText('4.5');
        expect(ratingElement).toBeInTheDocument();

        const cuisinesElement = screen.getByText('Cuisines: Italian, Pizza');
        expect(cuisinesElement).toBeInTheDocument();

        const costForTwoElement = screen.getByText('Cost for 2: ₹500');
        expect(costForTwoElement).toBeInTheDocument();

        const deliveryTimeElement = screen.getByText('Delivery Time: 30 mins');
        expect(deliveryTimeElement).toBeInTheDocument();
    });
});