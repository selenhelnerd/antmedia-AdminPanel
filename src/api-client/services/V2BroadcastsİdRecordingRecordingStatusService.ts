/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsİdRecordingRecordingStatusService {
    /**
     * Set stream specific recording setting, this setting overrides general Mp4 and WebM Muxing Setting
     * @returns any OK
     * @throws ApiError
     */
    public static putV2BroadcastsRecording({
        id,
        recordingStatus,
        accept,
        recordType,
        resolutionHeight,
        requestBody,
    }: {
        id: string,
        recordingStatus: string,
        accept?: string,
        /**
         * Record type: 'mp4' or 'webm'. It's optional parameter.
         */
        recordType?: string,
        /**
         * Resolution height of the broadcast that is wanted to record.
         */
        resolutionHeight?: string,
        requestBody?: any,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v2/broadcasts/{id}/recording/{recording-status}',
            path: {
                'id': id,
                'recording-status': recordingStatus,
            },
            headers: {
                'Accept': accept,
            },
            query: {
                'recordType': recordType,
                'resolutionHeight': resolutionHeight,
            },
            body: requestBody,
        });
    }
}
