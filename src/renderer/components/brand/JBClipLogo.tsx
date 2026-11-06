import iconUrl from '../../../../resources/jbclip-icon.png'
import lockupUrl from '../../../../resources/jbclip-logo.png'
import markUrl from '../../../../resources/jbclip-mark.png'
import { cn } from '../../lib/utils'

interface JBClipLogoProps {
  /** Full JBClip lockup, app icon, or compact JBClip mark. */
  variant?: 'lockup' | 'icon' | 'mark'
  /** Size by height (e.g. "h-6"); width follows the artwork. */
  className?: string
  alt?: string
}

/**
 * JBClip brand artwork generated from the approved JBClip logo.
 */
export function JBClipLogo({ variant = 'lockup', className, alt = 'JBClip' }: JBClipLogoProps): React.JSX.Element {
  if (variant === 'lockup') {
    return (
      <img src={lockupUrl} alt={alt} draggable={false} className={cn('h-full w-auto shrink-0 select-none', className)} />
    )
  }

  return (
    <img
      src={variant === 'icon' ? iconUrl : markUrl}
      alt={alt}
      draggable={false}
      className={cn('w-auto shrink-0 select-none', className)}
    />
  )
}
