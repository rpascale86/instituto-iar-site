import { NextResponse } from 'next/server';
export async function POST(request: Request) { const body = await request.json(); const { name, email, subject, message } = body ?? {}; if (!name || !email || !subject || !message) { return NextResponse.json({ message: 'Preencha os campos obrigatórios.' }, { status: 400 }); } return NextResponse.json({ message: 'Mensagem recebida com sucesso.' }); }
