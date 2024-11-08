import { NextRequest, NextResponse } from "next/server";
import conn from "@/app/libs/mysql";

export async function GET() {
    try {
        const db = await conn.getConnection()
        const query = 'select * from user'
        const [rows] = await db.execute(query)
        db.release()
        
        return NextResponse.json(rows)
    } catch (error) {
        return NextResponse.json({
            error: error
        }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const id = body.id;

    const db = await conn.getConnection();
    const query = 'SELECT * FROM user WHERE id = ?';
    const [rows] = await db.execute(query, [id]);
    db.release();

    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({
      error: error,
      status: 500,
    });
  }
}
