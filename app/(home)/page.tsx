import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col m-16">
      <h1 className="mb-4 text-5xl font-bold">Web3 TypeScript SDK</h1>
      <h3 className="text-fd-muted-foreground">
        Mesh is a TypeScript open-source framework and library, providing <br /> numerous tools to build on UTXO-based blockchains.
      </h3>
    </main>
  );
}
