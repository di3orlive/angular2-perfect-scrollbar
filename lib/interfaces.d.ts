import { Provider } from '@angular/core';
export interface FontPickerConfigInterface {
    apiKey?: string;
}
export declare class FontPickerConfig implements FontPickerConfigInterface {
    apiKey: string;
}
/**
 * Creates a provider for a {@link FontPickerConfig})
 */
export declare function provideFontPickerConfig(configInterface: FontPickerConfigInterface): Provider;
