"use client";
import { BateriaProps } from "@/app/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default async function BateriaPage({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    return <Bateria id={id} />;
}

function Bateria({ id }: { id: number }) {
    const navigate = useRouter();

    const [bateria, setBateria] = useState<BateriaProps>({
        id: 0,
        tensao_nominal: 0,
        capacidade_ah: 0,
        capacidade_kwh: 0,
    });

    useEffect(() => {
        const chamadaApi = async () => {
            const response = await fetch(`http://localhost:8080/baterias/${id}`);
            const data = await response.json();
            setBateria(data);
            console.log(data);
        };
        chamadaApi();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBateria((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const cabecalho = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bateria),
            };

            const response = await fetch(`http://localhost:8080/baterias/${bateria.id}`, cabecalho);
            if (response.ok) {
                alert("Bateria atualizada com sucesso!");
                setBateria({ id: 0, tensao_nominal: 0, capacidade_ah: 0, capacidade_kwh: 0 });
                navigate.push("/baterias");
            } else {
                alert("Erro ao atualizar a bateria!");
            }
        } catch (error) {
            console.error("Erro ao atualizar a bateria", error);
        }
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:8080/baterias/${bateria.id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                alert("Bateria deletada com sucesso");
                navigate.push("/baterias");
            } else {
                alert("Erro ao deletar a bateria");
            }
        } catch (error) {
            console.error("Erro ao deletar a bateria", error);
        }
    };

    return (
        <main className="flex flex-col items-center justify-center">
            <h2 className="text-3xl text-center text-indigo-600 mb-4">Bateria</h2>

            <form className="w-1/3 m-auto p-2 border border-indigo-950 rounded-md" onSubmit={handleSubmit}>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idtensao_nominal">Tensão Nominal</label>
                    <input
                        className="border border-gray-700 p-1 rounded-md"
                        type="text"
                        name="tensao_nominal"
                        id="idtensao_nominal"
                        value={bateria.tensao_nominal}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idcapacidade_ah">Capacidade Ah</label>
                    <input
                        className="border border-gray-700 p-1 rounded-md"
                        type="text"
                        name="capacidade_ah"
                        id="idcapacidade_ah"
                        value={bateria.capacidade_ah}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idcapacidade_kwh">Capacidade Kwh</label>
                    <input
                        className="border border-gray-700 p-1 rounded-md"
                        type="text"
                        name="capacidade_kwh"
                        id="idcapacidade_kwh"
                        value={bateria.capacidade_kwh}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex justify-end gap-2 p-2">
                    <button className="bg-green-700 text-white text-xl p-2 rounded-md" type="submit">Atualizar Bateria</button>
                    <button className="bg-red-700 text-white text-xl p-2 rounded-md" type="button" onClick={handleDelete}>Deletar Bateria</button>
                </div>
            </form>
        </main>
    );
}