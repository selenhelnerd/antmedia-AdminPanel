/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2VodsİmportToStalkerService {
    /**
     * Import VoDs to Stalker Portal
     * @returns any OK
     * @throws ApiError
     */
    public static postV2VodsİmportToStalker({
        accept,
        requestBody,
    }: {
        accept?: string,
        requestBody?: any,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/vods/import-to-stalker',
            headers: {
                'Accept': accept,
            },
            body: requestBody,
        });
    }
}
