"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { useTheme } from "next-themes";

import { FaSmile } from "react-icons/fa";

interface EmojiPickerProps {
	onChange: (value: string) => void;
}

export const EmojiPicker = ({ onChange }: EmojiPickerProps) => {
	const { resolvedTheme } = useTheme();

	return (
		<Popover>
			<PopoverTrigger>
				<FaSmile className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 h-6 w-6 transition" />
			</PopoverTrigger>
			<PopoverContent side="right" sideOffset={40} className="bg-transparent border-none shadow-none drop-shadow-none mb-16">
				<Picker theme={resolvedTheme} data={data} onEmojiSelect={(emoji: any) => onChange(emoji.native)} />
			</PopoverContent>
		</Popover>
	);
};
