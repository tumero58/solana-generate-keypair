import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import "dotenv/config";

try {
    const keypair = getKeypairFromEnvironment("SECRET_KEY");

    console.log(keypair.publicKey.toBase58(), "public key");
    console.log(keypair.secretKey, "public key");
} catch (err) {
    console.log(err.message);
}