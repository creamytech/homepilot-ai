export const metadata = { title: 'Security  HomePilot AI' }
export default function Security() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold">Security</h1>
      <ul className="list-disc pl-5 mt-2 text-sm opacity-80 space-y-1">
        <li>OAuth least-privilege</li>
        <li>Encryption in transit & at rest</li>
        <li>Approval gate before send</li>
        <li>Audit logging</li>
        <li>Broker consent options</li>
      </ul>
    </main>
  )
}
