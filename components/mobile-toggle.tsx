import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";
import { ServerSidebar } from "@/components/server/server-sidebar";

interface MobileToggleProps {
	serverId: string;
}

export const MobileToggle = ({ serverId }: MobileToggleProps) => {
	return (
		<div className="ml-auto">
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="ghost" size="icon" className="md:hidden">
						<Menu />
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="p-0 flex gap-0">
					<div className="w-[72px]">
						<NavigationSidebar />
					</div>
					<ServerSidebar serverId={serverId} />
				</SheetContent>
			</Sheet>
		</div>
	);
};
