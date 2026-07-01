import { TopNav } from '../../components/TopNav';
import type { AppNav } from '../../types';

interface Props { nav: AppNav }

const PRODUCTS = [
  { name: 'Teleport', category: 'Pedal', price: '$359/yr', badge: 'Included in membership', cta: 'Join (includes pedal)', action: 'membership' as const },
  { name: 'Teleport', category: 'Pedal — standalone', price: '$599', badge: null, cta: 'Add to cart', action: null },
  { name: 'Voxbox', category: 'Pedal — coming soon', price: 'TBD', badge: 'Coming soon', cta: 'Join waitlist', action: 'voxbox' as const },
  { name: 'Patch cable set', category: 'Accessory', price: '$XX', badge: null, cta: 'Add to cart', action: null },
  { name: 'Power supply', category: 'Accessory', price: '$XX', badge: null, cta: 'Add to cart', action: null },
  { name: 'Pedalboard mount', category: 'Accessory', price: '$XX', badge: null, cta: 'Add to cart', action: null },
];

export function StorePage({ nav }: Props) {
  return (
    <div>
      <TopNav nav={nav} />

      <section style={{ padding: '64px 0 80px', background: 'var(--surface)' }}>
        <div className="container">

          <div style={{ marginBottom: 40 }}>
            <div className="t-label" style={{ marginBottom: 8 }}>Store</div>
            <h1 className="t-h1" style={{ marginBottom: 8 }}>Pedals + accessories</h1>
            <p className="t-body t-muted">
              The store is the transaction layer — separate from the membership persuasion pages.
              If you're here for the community, <button className="btn-ghost" style={{ textDecoration: 'underline', color: 'var(--muted)', padding: 0, cursor: 'pointer' }} onClick={() => nav.navigate('membership')}>see Membership</button>.
            </p>
          </div>

          {/* Recommended: membership */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
            padding: '20px 24px', background: 'var(--bg)', border: '1px solid var(--line)',
            borderRadius: 'var(--radius-lg)', marginBottom: 40,
          }}>
            <div>
              <div className="t-label" style={{ marginBottom: 4 }}>Most popular</div>
              <div style={{ fontWeight: 700, fontSize: 16 }}>Guitargate Membership — includes Teleport pedal</div>
              <div className="t-caption t-muted">Community + Learn + Play + hardware, one price.</div>
            </div>
            <button className="btn btn-primary btn-sm" onClick={() => nav.navigate('membership')}>
              See Membership →
            </button>
          </div>

          {/* Product grid */}
          <div className="product-grid">
            {PRODUCTS.map(p => (
              <div key={`${p.name}-${p.category}`} className="product-card">
                <div className="product-card__img">
                  {p.badge && <span className="badge badge-dark">{p.badge}</span>}
                  {!p.badge && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)' }}>[ {p.name} image ]</span>}
                </div>
                <div className="product-card__body">
                  <div className="t-caption t-muted" style={{ marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: 11 }}>
                    {p.category}
                  </div>
                  <div className="product-card__name">{p.name}</div>
                  <div className="product-card__price">{p.price}</div>
                  <button
                    className={`btn btn-sm ${p.action ? 'btn-primary' : 'btn-secondary'}`}
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => p.action && nav.navigate(p.action)}
                  >
                    {p.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="t-caption t-muted" style={{ marginTop: 32, textAlign: 'center' }}>
            [Shopify integration layer — cart and checkout handled by Shopify]
          </p>

        </div>
      </section>

      <footer className="page-footer">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'rgba(255,255,255,0.4)', fontSize: 15 }}>
            GUITARGATE
          </span>
          <span>© 2025 Guitargate — Wireframe prototype</span>
        </div>
      </footer>
    </div>
  );
}
