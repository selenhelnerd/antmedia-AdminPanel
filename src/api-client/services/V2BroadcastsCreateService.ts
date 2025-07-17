/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsCreateService {
    /**
     * Creates a Broadcast, IP Camera or Stream Source and returns the full broadcast object with rtmp address and other information. The different between Broadcast and IP Camera or Stream Source is that Broadcast is ingested by Ant Media ServerIP Camera or Str
     * @returns any OK
     * @throws ApiError
     */
    public static postV2BroadcastsCreate({
        contentType,
        accept,
        autoStart,
        requestBody,
    }: {
        contentType?: string,
        accept?: string,
        /**
         * Only effective if stream is IP Camera or Stream Source. If it's true, it starts automatically pulling stream. Its value is false by default
         */
        autoStart?: boolean,
        requestBody?: Record<string, any>,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/broadcasts/create',
            headers: {
                'Content-Type': contentType,
                'Accept': accept,
            },
            query: {
                'autoStart': autoStart,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }
}
