import { Keypair } from "@solana/web3.js";

try {
    const keypair = Keypair.generate();
    console.log(keypair.publicKey.toBase58(), "public");
    console.log(keypair.secretKey, "secret");
} catch (err) {
    console.log(err.message);
}

