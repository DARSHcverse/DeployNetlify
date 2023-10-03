import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';

function CardExampleCard({ jobData }) {
  return (
    <div className='card'>
      <Card>
        <Image src={jobData.Image} className='UIImage'/>
        <Card.Content>
          <Card.Header>{jobData.Title}</Card.Header><br />
          <Card.Description>{jobData.JobDescription}</Card.Description>
        </Card.Content>
        {/* <Card.Content extra>
          <a>
            <Icon name='user' />
            22 Friends
          </a>
        </Card.Content> */}
      </Card>
    </div>
  );
}

export default CardExampleCard;
