import { prisma } from '@/globals/db';
import { NextRequest, NextResponse } from 'next/server';
import { zUpsertNote } from '@/app/notes/type';

const dynamic = 'force-dynamic';

async function GET() {
  const notes = await prisma.note.findMany();
  return NextResponse.json(notes);
}

async function POST(req: NextRequest) {
  const json = await req.json();
  const data = zUpsertNote.parse(json);
  const note = await prisma.note.create({ data });
  return new NextResponse(String(note.id), { status: 201 });
}

export { dynamic, GET, POST };
