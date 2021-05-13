import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import './faq.css'
import faq from '../../../images/faq.png'
const FAQ = () => {
  return (
    <section className='faq' style={{background:'#fff'}}>
      
      <h2
        className='fs-1 text-center py-3 Primary-Color'
        style={{ fontFamily: 'block' }}
      >
        Frequently Asked Questions
      </h2>

      <div className='row'>
        <div className='col-md-6 d-flex flex-column'>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                  My Device Doesn’t Switch On
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey='0'>
                <Card.Body>
                  An electronic device not switching on can be the result of
                  many things. Most commonly there is a fault with the mainboard
                  or the battery. We can diagnose a range of issues and replace
                  only what's needed to be.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant='link' eventKey='1'>
                  Can I Deliver My Device in Person?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey='1'>
                <Card.Body>
                  {' '}
                  Unfortunately, due to health and safety laws we cannot allow
                  members of the public on our premises so we can only accept
                  mail deliveries of your devices.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant='link' eventKey='2'>
                  Is The Postage Insured When You Send Back My Device?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey='2'>
                <Card.Body>
                  {' '}
                  Every device that leaves our store comes with a €1,000 minimum
                  insurance cover, so rest assured you won't be out of pocket if
                  the worst happens. We also recommend insuring the mail to the
                  value of your phone when you send it in for repairs.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant='link' eventKey='3'>
                  What Happens if You Can’t Fix My Device?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey='3'>
                <Card.Body>
                  {' '}
                  If we can't fix your device we will get in touch with you to
                  discuss your options. We can either offer you a replacement
                  device for a cost, or we can return the device to you and
                  refund your service charge.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant='link' eventKey='4'>
                  Flushed My Phone Down the Toilet
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey='4'>
                <Card.Body>
                  {' '}
                  That was a bit silly, wasn't it? Some believe putting the
                  device in a bag of rice will solve all your problems. But this
                  isn't true and sometimes the damage has already been done.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
        <div className="col-md-6">
          <img src={faq} alt="" className="img-fluid" />
    </div>
      </div>
    </section>
  );
};

export default FAQ;
