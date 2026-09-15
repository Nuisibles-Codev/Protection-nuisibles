import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const imageUrl = searchParams.get('url')

  if (!imageUrl) {
    return new NextResponse('URL d\'image manquante', { status: 400 })
  }

  try {
    // Si l'URL contient déjà un Access Token Meta (URL signée Graph API),
    // on effectue le fetch avec les headers exacts d'un navigateur moderne.
    const response = await fetch(imageUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
      },
    })

    if (!response.ok) {
      // Si Meta refuse l'accès direct par CDN, on tente une récupération directe via Graph API avec le Token
      const accessToken = process.env.META_ACCESS_TOKEN
      if (accessToken && !imageUrl.includes('access_token')) {
        const fallbackUrl = `${imageUrl}&access_token=${accessToken}`
        const fallbackRes = await fetch(fallbackUrl)
        if (fallbackRes.ok) {
          const contentType = fallbackRes.headers.get('content-type') || 'image/jpeg'
          const arrayBuffer = await fallbackRes.arrayBuffer()
          return new NextResponse(arrayBuffer, {
            headers: {
              'Content-Type': contentType,
              'Cache-Control': 'public, max-age=86400, s-maxage=86400',
            },
          })
        }
      }

      return new NextResponse(`Erreur FB CDN: ${response.status}`, { status: response.status })
    }

    const contentType = response.headers.get('content-type') || 'image/jpeg'
    const arrayBuffer = await response.arrayBuffer()

    return new NextResponse(arrayBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      },
    })
  } catch {
    return new NextResponse('Erreur serveur proxy image', { status: 500 })
  }
}