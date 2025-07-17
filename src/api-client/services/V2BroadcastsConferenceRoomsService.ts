/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsConferenceRoomsService {
    /**
     * Creates a conference room with the parameters. The room name is key so if this is called with the same room name then new room is overwritten to old one
     * @returns any OK
     * @throws ApiError
     */
    public static postV2BroadcastsConferenceRooms({
        contentType,
        accept,
        requestBody,
    }: {
        contentType?: string,
        accept?: string,
        requestBody?: Record<string, any>,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/broadcasts/conference-rooms',
            headers: {
                'Content-Type': contentType,
                'Accept': accept,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }
}
