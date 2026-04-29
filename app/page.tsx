"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

export default function Home() {

  const [workOrders, setWorkOrders] = useState<any[]>([]);

  useEffect(() => {

    async function loadData() {

      const { data, error } = await supabase

        .from("work_orders")

        .select("*");

      if (!error) {

        setWorkOrders(data || []);

      }

    }

    loadData();

  }, []);

  return (

    <div style={{ padding: 30 }}>

      <h1>🚨 Live Fleet Dashboard</h1>

      <h2>Work Orders</h2>

      {workOrders.length === 0 ? (

        <p>No work orders found</p>

      ) : (

        workOrders.map((w) => (

          <div key={w.id} style={{ marginTop: 10 }}>

            <strong>{w.title}</strong> — {w.status} — {w.priority}

          </div>

        ))

      )}

    </div>

  );

}
