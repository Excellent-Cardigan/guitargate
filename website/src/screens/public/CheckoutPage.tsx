import { Placeholder } from '../../components/Placeholder';
import type { AppNav } from '../../types';

interface Props { nav: AppNav }

export function CheckoutPage({ nav }: Props) {
  return (
    <div>
      {/* Minimal nav */}
      <div style={{
        height: 56, background: 'var(--surface)', borderBottom: '1px solid var(--line)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 48px', position: 'sticky', top: 0, zIndex: 100,
      }}>
        <button
          style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, letterSpacing: '-0.02em', color: 'var(--ink)', cursor: 'pointer' }}
          onClick={() => nav.navigate('brand-home')}
        >
          GUITARGATE
        </button>
        <span className="t-caption t-muted">Secure checkout · Shopify layer</span>
        <button className="btn-ghost t-caption t-muted" onClick={() => nav.navigate('membership')}>
          ← Back
        </button>
      </div>

      <section style={{ padding: '48px 0 80px', background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: 900 }}>

          <div style={{ marginBottom: 32 }}>
            <div className="t-label" style={{ marginBottom: 8 }}>Step 3 of 6: Buy</div>
            <h1 className="t-h2">Complete your order</h1>
            <p className="t-caption t-muted" style={{ marginTop: 4 }}>
              [Shopify checkout layer — placeholder. Real flow hands off to Shopify here.]
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 40, alignItems: 'start' }}>

            {/* Left: form */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

              {/* Contact */}
              <div className="card">
                <div className="t-label" style={{ marginBottom: 16 }}>Contact</div>
                <div className="form-field">
                  <label>Email</label>
                  <div className="form-field__input">name@example.com</div>
                </div>
              </div>

              {/* Shipping */}
              <div className="card">
                <div className="t-label" style={{ marginBottom: 16 }}>Shipping address</div>
                <div className="form-row">
                  <div className="form-field">
                    <label>First name</label>
                    <div className="form-field__input">—</div>
                  </div>
                  <div className="form-field">
                    <label>Last name</label>
                    <div className="form-field__input">—</div>
                  </div>
                </div>
                <div className="form-field">
                  <label>Address</label>
                  <div className="form-field__input">—</div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label>City</label>
                    <div className="form-field__input">—</div>
                  </div>
                  <div className="form-field">
                    <label>ZIP / Postal code</label>
                    <div className="form-field__input">—</div>
                  </div>
                </div>
                <div className="form-field">
                  <label>Country</label>
                  <div className="form-field__input">United States ▾</div>
                </div>
              </div>

              {/* Payment */}
              <div className="card">
                <div className="t-label" style={{ marginBottom: 16 }}>Payment</div>
                <Placeholder label="Shopify / Stripe payment form" height={120} />
              </div>

            </div>

            {/* Right: order summary */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div className="card">
                <div className="t-label" style={{ marginBottom: 16 }}>Order summary</div>

                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 16 }}>
                  <Placeholder label="Pedal" height={64} width={64} style={{ flexShrink: 0, borderRadius: 8 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 2 }}>Guitargate 3.0 Membership</div>
                    <div className="t-caption t-muted">Includes Teleport pedal (MSRP $599)</div>
                    <div className="t-caption t-muted">Ships within 3–5 business days</div>
                  </div>
                  <div style={{ fontWeight: 600, fontSize: 15, flexShrink: 0 }}>$359.00</div>
                </div>

                <hr className="divider" style={{ margin: '16px 0' }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="t-caption t-muted">Subtotal</span>
                    <span className="t-caption">$359.00</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="t-caption t-muted">Shipping</span>
                    <span className="t-caption">Calculated at next step</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="t-caption t-muted">Tax</span>
                    <span className="t-caption">Calculated at next step</span>
                  </div>
                </div>

                <hr className="divider" style={{ margin: '16px 0' }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 700 }}>Total</span>
                  <span style={{ fontWeight: 700, fontSize: 18 }}>$359.00</span>
                </div>

                <button
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: 20, justifyContent: 'center' }}
                  onClick={() => nav.navigate('onboarding')}
                >
                  Complete order →
                </button>

                <p className="t-caption t-muted" style={{ textAlign: 'center', marginTop: 10 }}>
                  By completing your order you agree to the Terms of Service.
                </p>
              </div>

              <div style={{
                padding: '14px 16px', background: 'var(--bg)', border: '1px solid var(--line)',
                borderRadius: 'var(--radius)', fontSize: 'var(--text-caption)', color: 'var(--muted)', lineHeight: 1.6,
              }}>
                <strong style={{ color: 'var(--ink)' }}>Teleport ships within 3–5 days.</strong>{' '}
                Your app access and member community are live immediately after purchase.
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
