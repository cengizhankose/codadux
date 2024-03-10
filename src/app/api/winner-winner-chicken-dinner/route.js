import { NextResponse } from "next/server";
import * as solanaWeb3 from "@solana/web3.js";
import bs58 from "bs58";

export async function POST(request) {
  const body = await request.json();
  const { winnerAddress, prizeAmount } = body;
  const devnetRPC = "https://api.devnet.solana.com";
  const account2 = process.env.NEXT_PUBLIC_SOLANA_SECRET_KEY;

  const connection = new solanaWeb3.Connection(devnetRPC);

  const fromWallet = solanaWeb3.Keypair.fromSecretKey(bs58.decode(account2));

  const winnerPubkey = new solanaWeb3.PublicKey(winnerAddress);

  const prizeAmountLamports = solanaWeb3.LAMPORTS_PER_SOL * prizeAmount;

  const transaction = new solanaWeb3.Transaction().add(
    solanaWeb3.SystemProgram.transfer({
      fromPubkey: fromWallet.publicKey,
      toPubkey: winnerPubkey,
      lamports: prizeAmountLamports,
    })
  );
  transaction.feePayer = fromWallet.publicKey;

  const signature = await solanaWeb3.sendAndConfirmTransaction(
    connection,
    transaction,
    [fromWallet]
  );

  return NextResponse.json({ message: "Congrats!", signature });
}
