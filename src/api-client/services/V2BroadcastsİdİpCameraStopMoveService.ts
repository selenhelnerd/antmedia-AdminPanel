/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsİdİpCameraStopMoveService {
    /**
     * Stop move for IP Camera.
     * @returns any OK
     * @throws ApiError
     */
    public static postV2BroadcastsİpCameraStopMove({
        id,
        accept,
        requestBody,
    }: {
        id: string,
        accept?: string,
        requestBody?: any,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/broadcasts/{id}/ip-camera/stop-move',
            path: {
                'id': id,
            },
            headers: {
                'Accept': accept,
            },
            body: requestBody,
        });
    }
}
