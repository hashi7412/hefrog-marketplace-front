import styled from 'styled-components';
import { media } from 'utils/media';

const Title1 = styled.h3`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    text-transform: capitalize;

    color: #010F52;

	${media('<=desktop')} {
	line-height: 1.5;
	}
`;

 export default Title1