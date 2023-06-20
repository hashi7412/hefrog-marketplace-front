import styled from 'styled-components';
import { media } from 'utils/media';

const Title2 = styled.h3`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    text-transform: capitalize;

    /* Heading color */

    color: #010F52;

	${media('<=desktop')} {
	    line-height: 1.5;
	}
`;

export default Title2;