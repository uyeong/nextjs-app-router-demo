import { prisma } from '@/globals/db';
import { NextResponse } from 'next/server';

const dynamic = 'force-dynamic';

async function GET() {
  const notes = await prisma.note.findMany();
  return NextResponse.json(notes);
}

export { dynamic, GET };
