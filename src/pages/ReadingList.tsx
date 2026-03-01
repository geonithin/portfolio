import { Link } from 'react-router-dom'

const books = [
  {
    cover: '/images/books/it-ends-with-us.jpg', title: 'It Ends with Us', author: 'Colleen Hoover',
    rating: '★★★★★', tags: ['Romance', 'Contemporary'],
    desc1: '<strong>Core Story:</strong> Lily Bloom meets Ryle Kincaid, a charming neurosurgeon, and they fall in love. However, his volatile temper surfaces, forcing Lily to confront the painful cycle of domestic violence she witnessed in her childhood.',
    desc2: '<strong>Key Themes:</strong> Domestic violence, emotional abuse, difficult choices, generational trauma, first love, and empowerment.',
    meta: 'Published: August 2, 2016',
  },
  {
    cover: '/images/books/it-starts-with-us.jpg', title: 'It Starts with Us', author: 'Colleen Hoover',
    rating: '★★★★★', tags: ['Romance', 'Sequel'],
    desc1: '<strong>Core Story:</strong> Sequel to Book 1. Lily and ex-husband Ryle co-parent their daughter civilly. When Lily unexpectedly runs into Atlas Corrigan, she finally feels the timing is right for a second chance at love.',
    desc2: '<strong>Key Themes:</strong> Second chances, co-parenting after divorce/abuse, healing, moving forward.',
    meta: 'Published: October 18, 2022',
  },
  {
    cover: '/images/books/pride-and-prejudice.jpg', title: 'Pride & Prejudice', author: 'Jane Austen',
    rating: '★★★★★', tags: ['Classic', 'Romance'],
    desc1: '<strong>Core Story:</strong> Elizabeth Bennet navigates social pressures in early 19th-century England. Her developing relationship with the wealthy Fitzwilliam Darcy must overcome their initial mutual dislike through self-realization.',
    desc2: '<strong>Key Themes:</strong> Pride and prejudice as blinding flaws, love vs. financial necessity, social class and reputation.',
    meta: 'Published: January 28, 1813',
  },
  {
    cover: '/images/books/sherlock-holmes.jpg', title: 'Sherlock Holmes Collection', author: 'Sir Arthur Conan Doyle',
    rating: '★★★★★', tags: ['Mystery', 'Classic'],
    desc1: '<strong>Famous Novels:</strong> A Study in Scarlet (1887), The Sign of Four (1890), The Hound of the Baskervilles (1902), The Valley of Fear (1915).',
    desc2: '<strong>Why It Matters:</strong> The legendary detective whose powers of deduction revolutionized mystery fiction.',
    meta: 'Published: 1887–1927',
  },
  {
    cover: '/images/books/getting-more.png', title: 'Getting More', author: 'Stuart Diamond',
    rating: '', tags: ['Negotiation', 'Self-Help'], badge: 'Currently Reading',
    desc1: '<strong>Core Philosophy:</strong> Rejects the traditional "win/lose" bargaining model. Argues that every interaction is a negotiation, and success comes from valuing the other party above all else.',
    desc2: '<strong>Key Method:</strong> The model focuses on understanding the other party\'s perceptions and emotions, shown to be four times more powerful than logic, power, or leverage.',
    meta: 'Published: 2010',
  },
]

export default function ReadingList() {
  return (
    <>
      <div className="bg-watermark" aria-hidden="true">books</div>
      <main className="page-main">
        <Link to="/personal" className="back-nav">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Personal
        </Link>

        <div className="page-header">
          <div className="page-header__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
          </div>
          <h1>Books I've Read</h1>
          <p>Literary adventures that shaped my thinking and expanded my horizons</p>
        </div>

        <div className="card-grid" style={{ marginTop: '2rem' }}>
          {books.map(b => (
            <div key={b.title} className="card book-card">
              <img className="book-card__cover" src={b.cover} alt={b.title} />
              <div className="book-card__info">
                <h3 className="book-card__title">{b.title}</h3>
                <p className="book-card__author">{b.author}</p>
                {b.rating && <div className="book-card__rating">{b.rating}</div>}
                {'badge' in b && b.badge && <span className="badge badge--amber">{b.badge}</span>}
                <div className="tags">{b.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
                <p className="book-card__desc" dangerouslySetInnerHTML={{ __html: b.desc1 }} />
                <p className="book-card__desc" dangerouslySetInnerHTML={{ __html: b.desc2 }} />
                <p className="book-card__meta">{b.meta}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="stats-grid">
          <div className="stat-card"><div className="stat-card__value">4</div><div className="stat-card__label">Books / Collections Read</div></div>
          <div className="stat-card"><div className="stat-card__value">Diverse</div><div className="stat-card__label">Classic to Contemporary</div></div>
          <div className="stat-card"><div className="stat-card__value">5/5</div><div className="stat-card__label">Average Rating</div></div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/personal" className="btn">Back to Personal</Link>
          <Link to="/" className="btn" style={{ marginLeft: '0.5rem' }}>Home</Link>
        </div>
      </main>
      <footer className="footer"><p>Built with ♥ by Geo Nithin J</p></footer>
    </>
  )
}
