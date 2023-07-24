import { NextRequest, NextResponse } from 'next/server';

import { zUpsertNote } from '@/app/notes/type';
import { prisma } from '@/globals/db';

async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const note = await prisma.note.findUnique({
    where: { id: Number(params.id) },
  });
  if (note === null) {
    return new NextResponse(null, { status: 404 })
  }
  return NextResponse.json(note)
}

async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const json = await req.json();
  const data = zUpsertNote.parse(json);
  await prisma.note.update({
    where: { id: Number(params.id) },
    data,
  });
  return new NextResponse(null, { status: 204 })
}

async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await prisma.note.delete({ where: { id: parseInt(params.id, 10) }});
  return new NextResponse(null, { status: 204 })
}

export { GET, PUT, DELETE };
