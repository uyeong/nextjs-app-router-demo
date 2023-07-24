import { NextRequest, NextResponse } from 'next/server';
import { zSettings } from '@/app/type';
import { prisma } from '@/globals/db';

async function PUT(req: NextRequest) {
  const json = await req.json();
  const data = zSettings.parse(json);
  await prisma.$transaction([
    prisma.metadata.update({
      where: { key: 'version' },
      data: { value: data.version }
    }),
    prisma.metadata.update({
      where: { key: 'faq' },
      data: { value: data.faq },
    }),
    prisma.metadata.update({
      where: { key: 'tos' },
      data: { value: data.tos },
    }),
  ]);
  return new NextResponse(null, { status: 204 });
}

export { PUT };
