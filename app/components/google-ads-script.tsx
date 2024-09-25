import React, { useEffect, useRef } from 'react'
import { featureFlags } from '~/config/feature-flags'

// <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6892126566030270"
// crossorigin="anonymous"></script>

function GoogleAdsScript() {
  const scriptDivRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (
      scriptDivRef.current &&
      !scriptDivRef.current.firstChild &&
      featureFlags.enableGoogleAds
    ) {
      const script = document.createElement('script')
      script.async = true
      script.crossOrigin = 'anonymous'
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6892126566030270`
      script.type = 'text/javascript'
      scriptDivRef.current.appendChild(script)
    }
  }, [])

  if (!featureFlags.enableGoogleAds) return null

  return <div ref={scriptDivRef} />
}

export default GoogleAdsScript
