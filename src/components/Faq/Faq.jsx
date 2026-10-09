import React from 'react';

const Faq = () => {
    return (
      <div>
        <div className="my-10 text-center">
          <h1 className="font-extrabold text-3xl py-4">
            Frequently Asked Question (FAQ)
          </h1>
          <p>
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ehase!
          </p>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 my-20 m-2">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              Is it suitable for all ages and body types?
            </div>
            <div className="collapse-content text-sm">
              Yes, it is designed to be suitable for people of different ages
              and body types. It offers comfort, flexibility, and a stylish look
              for everyone. However, the best fit may depend on individual
              preferences, body shape, and size. We recommend choosing the right
              size to ensure maximum comfort and satisfaction.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              Does it really help with back pain and posture improvement?
            </div>
            <div className="collapse-content text-sm">
              Yes, it may help reduce back discomfort and support better posture
              when used correctly. It is designed to provide additional support
              and encourage a more comfortable sitting or standing position.
              However, the results may vary from person to person, and it may
              not completely relieve back pain or correct posture problems. For
              the best results, we recommend combining it with regular exercise,
              proper posture habits, and professional advice if back pain
              persists.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              Does it have smart features like vibration alerts?
            </div>
            <div className="collapse-content text-sm">
              Yes, it may include smart features such as vibration alerts to
              help remind users to maintain proper posture throughout the day.
              These features can make it easier to develop better posture habits
              and stay aware of your sitting or standing position. However, the
              availability of vibration alerts and other smart functions depends
              on the specific model, so we recommend checking the product
              specifications before purchasing.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              How will I be notified when the product is back in stock?
            </div>
            <div className="collapse-content text-sm">
              You can sign up for back-in-stock notifications by entering your
              email address or phone number on the product page and clicking the
              “Notify Me” button. Once the product becomes available again,
              we’ll send you a notification so you can purchase it. Please make
              sure your contact information is correct so you don’t miss the
              update. If you can’t find the notification option, feel free to
              contact our customer support team for assistance.
            </div>
          </div>
        </div>
      </div>
    );
};

export default Faq;