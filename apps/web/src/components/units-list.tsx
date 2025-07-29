import { useQuery } from "@tanstack/react-query";
import { orpc } from "@/utils/orpc";

export function UnitsList() {
	const { data, isLoading, error } = useQuery(
		orpc.units.getUnits.queryOptions(),
	);

	if (isLoading) return <div>Loading units...</div>;
	if (error) {
		// Optionally check for unauthorized error here
		return <div>Error loading units. {error.message}</div>;
	}

	if (!data || data.length === 0) return <div>No units found.</div>;

	return (
		<ul>
			{data.map((unit) => (
				<li key={unit.id}>{unit.title}</li>
			))}
		</ul>
	);
}
