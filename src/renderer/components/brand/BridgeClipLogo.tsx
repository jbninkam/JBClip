import iconUrl from '../../../../resources/bridgeclip-icon.svg'
import markUrl from '../../../../resources/bridgemind-mark.svg'
import { cn } from '../../lib/utils'

interface BridgeClipLogoProps {
  /** Full JBClip lockup, app icon, or the inherited BridgeMind mark. */
  variant?: 'lockup' | 'icon' | 'mark'
  /** Size by height (e.g. "h-6"); width follows the artwork. */
  className?: string
  alt?: string
}

/**
 * JBClip brand artwork. The icon and mark remain inherited artwork from
 * BridgeClip until the JBClip visual identity is finalized.
 */
export function BridgeClipLogo({ variant = 'lockup', className, alt = 'JBClip' }: BridgeClipLogoProps): React.JSX.Element {
  if (variant === 'lockup') {
    return (
      <span className={cn('inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-white', className)} aria-label={alt}>
        <img src={markUrl} alt="" draggable={false} className="h-full w-auto shrink-0 select-none" />
        <span>JBClip</span>
      </span>
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
