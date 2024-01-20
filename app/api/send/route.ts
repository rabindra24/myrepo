import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";

import { Resend } from 'resend';

const resend = new Resend('re_LM6zHK3i_9NSyVdbvo8j1W6Wg1ipucNVN');

export async function POST() {
  try {
    const data = await resend.emails.send({
      text : 'this',
      from: 'anywere@balajideveloper.com',
      to: ['rabindramahato2403@gmail.com'],
      subject: 'Next14 Email is working',
      react: EmailTemplate({ firstName: 'John' }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}