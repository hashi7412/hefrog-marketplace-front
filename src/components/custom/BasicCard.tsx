import NextImage from 'next/image';
import styled from 'styled-components';

interface BasicCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function BasicCard({ title, description, imageUrl }: BasicCardProps) {
  return (
    <Card>
      <div className='m-2'>
        <NextImage src={imageUrl} width={82} height={82} alt={title} />
      </div>
      <CardContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </CardContent>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  background: #FFFFFF;
  box-shadow: 10px 10px 30px 20px #F5F5F5;
  border-radius: 20px;
  color: rgb(var(--text));
  font-size: 1.6rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const CardContent = styled.div`
  width: 100%;
  font-size: 1.6rem;
  text-align: center;
  margin-left: 2rem;
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;


const Title = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */

  text-align: center;
  text-transform: capitalize;

  color: #010F52;
`;

const Description = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  text-align: center;

  color: #737576;
`;
