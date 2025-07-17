/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsWebrtcViewersWebrtcViewerİdStopService {
    /**
     * Stop player with a specified id
     * @returns any OK
     * @throws ApiError
     */
    public static postV2BroadcastsWebrtcViewersStop({
        webrtcViewerİd,
        accept,
        requestBody,
    }: {
        webrtcViewerİd: string,
        accept?: string,
        requestBody?: any,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/broadcasts/webrtc-viewers/{webrtc-viewer-id}/stop',
            path: {
                'webrtc-viewer-id': webrtcViewerİd,
            },
            headers: {
                'Accept': accept,
            },
            body: requestBody,
        });
    }
}
