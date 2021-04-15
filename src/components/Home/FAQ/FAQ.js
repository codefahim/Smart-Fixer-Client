import React from 'react';

const FAQ = () => {
  return (
    <section className='faq'>
      <h4 className='Green-Color text-center py-3'>Don’t be afraid to ask!</h4>
      <h2 className='fs-1 text-center py-3 Primary-Color'>
        Frequently Asked Questions
      </h2>
      <div className='row'>
        <div className='col-md-6 d-flex flex-column'>
          <div>
            <div>
              <h4 className='Green-Color fs-6'>My Device Doesn’t Switch On</h4>
              <p className='text-secondary'>
                An electronic device not switching on can be the result of many
                things. Most commonly there is a fault with the mainboard or the
                battery. We can diagnose a range of issues and replace only
                what's needed to be.
              </p>
            </div>
          </div>

          <div>
            <div>
              <h4 className='Green-Color fs-6'>My Touchscreen Doesn’t Work</h4>
              <p className='text-secondary'>
                Many touchscreens won't work if the device has been a victim to
                a heavy fall or if the device has previously been 'repaired' and
                a genuine screen wasn't used in the replacement. All our
                replacement parts come with a 6 month warranty.
              </p>
            </div>
          </div>

          <div>
            <div>
              <h4 className='Green-Color fs-6'>
                Flushed My Phone Down the Toilet
              </h4>
              <p className='text-secondary'>
                That was a bit silly, wasn't it? Some believe putting the device
                in a bag of rice will solve all your problems. But this isn't
                true and sometimes the damage has already been done.
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-6 d-flex flex-column'>
          <div>
            <div>
              <h4 className='Green-Color fs-6'>
                What Happens if You Can’t Fix My Device?
              </h4>
              <p className='text-secondary'>
                If we can't fix your device we will get in touch with you to
                discuss your options. We can either offer you a replacement
                device for a cost, or we can return the device to you and refund
                your service charge.
              </p>
            </div>
          </div>

          <div>
            <div>
              <h4 className='Green-Color fs-6'>
                Is The Postage Insured When You Send Back My Device?
              </h4>
              <p className='text-secondary'>
                Every device that leaves our store comes with a €1,000 minimum
                insurance cover, so rest assured you won't be out of pocket if
                the worst happens. We also recommend insuring the mail to the
                value of your phone when you send it in for repairs.
              </p>
            </div>
          </div>

          <div>
            <div>
              <h4 className='Green-Color fs-6'>
                Can I Deliver My Device in Person?
              </h4>
              <p className='text-secondary'>
                Unfortunately, due to health and safety laws we cannot allow
                members of the public on our premises so we can only accept mail
                deliveries of your devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
