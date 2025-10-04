export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
