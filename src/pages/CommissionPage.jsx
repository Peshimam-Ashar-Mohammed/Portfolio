import React from 'react'

const services = ['Poster design', 'Visual identity posters', 'Music posters', 'Film posters']

export default function CommissionPage() {
  return (
    <section className="section-panel slide-up stack-md">
      <p className="eyebrow">Commission</p>
      <h1>Services</h1>
      <ul className="service-list">
        {services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
      <p className="price">Starting from $50 / ₹4000</p>
    </section>
  )
}
