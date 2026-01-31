import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | ENI Engineering</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center pt-20 pb-12">
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center">
            <div className="mb-8">
              <span className="text-8xl md:text-9xl font-display font-bold text-brand-500/20">
                404
              </span>
            </div>

            <h1 className="text-display-md text-slate-900 mb-4">
              Page Not Found
            </h1>

            <p className="text-lg text-slate-600 mb-8">
              Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/" className="btn-primary">
                <Home className="w-4 h-4" />
                Go Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="btn-outline"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
