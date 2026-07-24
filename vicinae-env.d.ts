/// <reference types="@vicinae/api">

/*
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 */

type ExtensionPreferences = {
  /** Ente CLI Path - If you wish to use your own CLI, type here the location of your local installation. */
	"cliPath"?: string;

	/** Ente CLI Export Location - If you wish to change the default export path, type here the location of your local installation. */
	"exportPath": string;

	/** Primary Action - Choose whether the primary action should copy or paste the output. */
	"primaryAction": "copy" | "paste";

	/** Privacy - Choose whether the export should be deleted after import. */
	"deleteExport": boolean;
}

declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Command: Get TOTP */
	export type Index = ExtensionPreferences & {
		
	}

	/** Command: Export Secrets */
	export type Export = ExtensionPreferences & {
		
	}

	/** Command: Import Secrets */
	export type Import = ExtensionPreferences & {
		
	}

	/** Command: Delete Export */
	export type Delete = ExtensionPreferences & {
		
	}
}

declare namespace Arguments {
  /** Command: Get TOTP */
	export type Index = {
		
	}

	/** Command: Export Secrets */
	export type Export = {
		
	}

	/** Command: Import Secrets */
	export type Import = {
		
	}

	/** Command: Delete Export */
	export type Delete = {
		
	}
}