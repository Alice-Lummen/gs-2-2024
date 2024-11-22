"use client";
import { CarroProps } from "@/app/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default async function CarroPage({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    return <Carro id={id} />;
}

function Carro({ id }: { id: number }) {
    const navigate = useRouter();

    const [carro, setCarro] = useState<CarroProps>({
        id: 0,
        placa: "",
        marca: "",
        modelo: "",
        ano: 0,
    });

    useEffect(() => {
        const chamadaApi = async () => {
            const response = await fetch(`http://localhost:8080/carros/${id}`);
            const data = await response.json();
            setCarro(data);
            console.log(data);
        };
        chamadaApi();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCarro((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const cabecalho = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(carro),
            };

            const response = await fetch(`http://localhost:8080/carros/${carro.id}`, cabecalho);
            if (response.ok) {
                alert("Carro atualizado com sucesso!");
                setCarro({ id: 0, placa: "", marca: "", modelo: "", ano: 0 });
                navigate.push("/carros");
            } else {
                alert("Erro ao atualizar o carro!");
            }
        } catch (error) {
            console.error("Erro ao atualizar o carro", error);
        }
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:8080/carros/${carro.id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                alert("Carro deletado com sucesso");
                navigate.push("/carros");
            } else {
                alert("Erro ao deletar o carro");
            }
        } catch (error) {
            console.error("Erro ao deletar o carro", error);
        }
    };

    return (
        <main className="flex flex-col items-center justify-center">
            <h2 className="text-3xl text-center text-indigo-600 mb-4">Carro</h2>

            <form className="w-1/3 m-auto p-2 border border-indigo-950 rounded-md" onSubmit={handleSubmit}>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idplaca">Placa</label>
                    <input
                        className="border border-gray-700 p-1 rounded-md"
                        type="text"
                        name="placa"
                        id="idplaca"
                        value={carro.placa}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idmarca">Marca</label>
                    <input
                        className="border border-gray-700 p-1 rounded-md"
                        type="text"
                        name="marca"
                        id="idmarca"
                        value={carro.marca}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idmodelo">Modelo</label>
                    <input
                        className="border border-gray-700 p-1 rounded-md"
                        type="text"
                        name="modelo"
                        id="idmodelo"
                        value={carro.modelo}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col p-2">
                    <label className="text-gray-700" htmlFor="idano">Ano</label>
                    <input
                        className="border border-gray-700 p-1 rounded-md"
                        type="number"
                        name="ano"
                        id="idano"
                        value={carro.ano}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex justify-end gap-2 p-2">
                    <button className="bg-green-700 text-white text-xl p-2 rounded-md" type="submit">Atualizar Carro</button>
                    <button className="bg-red-700 text-white text-xl p-2 rounded-md" type="button" onClick={handleDelete}>Deletar Carro</button>
                </div>
            </form>
        </main>
    );
}