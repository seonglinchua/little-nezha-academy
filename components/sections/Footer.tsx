import React from 'react'
import { Container } from '@/components/ui'
import { landingPageContent } from '@/lib/content'

const Footer: React.FC = () => {
  const { footer } = landingPageContent

  return (
    <footer className="bg-nezha-neutral-900 text-white pt-16 pb-8">
      <Container size="lg">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-3xl">🎒</div>
              <span className="text-heading-md font-display font-bold">
                Little Nezha
              </span>
            </div>
            <p className="text-body-sm text-nezha-neutral-400 mb-4">
              {footer.tagline}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {footer.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-nezha-neutral-800 hover:bg-nezha-primary-500 flex items-center justify-center transition-colors"
                  aria-label={social.platform}
                >
                  <span className="text-sm">{social.platform[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-heading-sm font-display font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              {footer.links.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-body-sm text-nezha-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-heading-sm font-display font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {footer.links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-body-sm text-nezha-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-heading-sm font-display font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footer.links.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-body-sm text-nezha-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-heading-sm font-display font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footer.links.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-body-sm text-nezha-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-nezha-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-body-sm text-nezha-neutral-500">
            {footer.copyright}
          </p>
          <div className="flex gap-4 text-body-sm text-nezha-neutral-500">
            <span>Made with ❤️ for curious minds</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
