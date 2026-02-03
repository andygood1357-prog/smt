"use client";
export const dynamic = "force-dynamic";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirebaseAuth } from "../../firebase";
import { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    const auth = getFirebaseAuth();
    await createUserWithEmailAndPassword(auth, email, password);
    alert("???? ??");
  };

  return (
    <div>
      <h1>????</h1>
      <input onChange={e => setEmail(e.target.value)} />
      <input type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={signup}>????</button>
    </div>
  );
}
