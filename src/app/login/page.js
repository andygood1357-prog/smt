"use client";
export const dynamic = "force-dynamic";

import { signInWithEmailAndPassword } from "firebase/auth";
import { getFirebaseAuth } from "../../firebase";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const auth = getFirebaseAuth();
    await signInWithEmailAndPassword(auth, email, password);
    alert("??? ??");
  };

  return (
    <div>
      <h1>???</h1>
      <input onChange={e => setEmail(e.target.value)} />
      <input type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>???</button>
    </div>
  );
}
